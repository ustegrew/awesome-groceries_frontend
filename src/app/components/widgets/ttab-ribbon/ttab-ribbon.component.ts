import
{
    Component,
    OnInit,
    OnChanges,
    AfterContentInit,
    ViewChild,
    ViewContainerRef,
    Input,
    ComponentFactoryResolver,
    ComponentRef,
    Type,
    ComponentFactory,
    SimpleChanges,
    ElementRef
  } from '@angular/core';

  import { TControllerService             } from '../../../services/controller/tcontroller.service';
  import { TTabRibbonCardModel            } from './ttab-ribbon-card-model.class';
import { Renderer2Interceptor } from '@angular/core/src/render/api';

@Component({
    selector: 'app-ttab-ribbon',
    templateUrl: './ttab-ribbon.component.html',
    styleUrls: ['./ttab-ribbon.component.css']
})
export class TTabRibbonComponent implements OnInit, OnChanges, AfterContentInit
{
    @ViewChild
    (
        'anchor',
        { read: ViewContainerRef }
    )                                 fTarget:        ViewContainerRef;
    @ViewChild
    (
        'root_panel',
        { read: ElementRef }
    )                                 fReceptor:      ElementRef;
    @ViewChild
    (
        'scrollable_panel',
        { read: ElementRef }
    )                                 fScrollTarget:  ElementRef;
    @Input()                          fCardModels:    TTabRibbonCardModel[];

    readonly                          kPaused                                   = 0;
    readonly                          kActive                                   = 1;

    private                           fCanUpdate:     boolean;
    private                           fState:         number;
    private                           fX:             number;


    constructor (private fResolver: ComponentFactoryResolver)
    {
        this.fCanUpdate = false;
        this.fState     = this.kPaused;
    }

    ngOnInit ()
    {
    }

    ngAfterContentInit ()
    {
        this.fCanUpdate = true;
        this.createCards ();
        console.log (this.fCardModels);
    }

    ngOnChanges(changes: SimpleChanges): void
    {
        this.createCards ();
    }

    onMouseEnter (event): void
    {
        this.fState = this.kActive;
        this.fX     = event.x;
        this.onTimer ();
    }

    onMouseLeave (event): void
    {
        this.fState = this.kPaused;
    }

    onMouseMove (event): void
    {
        /* console.log (event.x + '/' + event.offsetY); */
        this.fX = event.x;
    }

    onTimer (): void
    {
        if (this.fState === this.kActive)
        {
            this.iterate ();
            window.setTimeout
            (
                () =>
                {
                    this.onTimer();
                }, 30
            );
        }
    }

    private createCards (): void
    {
        let cFactory:   ComponentFactory<any>;
        let n:          number;
        let i:          number;
        let e:          TTabRibbonCardModel;
        let cm:         any;

        if (this.fCanUpdate)
        {
            this.fTarget.clear ();
            if (typeof this.fCardModels  !==  'undefined')
            {
                n = this.fCardModels.length;
                for (i = 0; i < n; i++)
                {
                    e         = this.fCardModels [i];
                    cFactory  = this.fResolver.resolveComponentFactory (e.fComponent);
                    cm        = this.fTarget.createComponent (cFactory);
                    cm.instance.fCategory = e.fData;
                }
                for (i = 0; i < n; i++)
                {
                    e         = this.fCardModels [i];
                    cFactory  = this.fResolver.resolveComponentFactory (e.fComponent);
                    cm        = this.fTarget.createComponent (cFactory);
                    cm.instance.fCategory = e.fData;
                }
            }
        }
    }

    private iterate ()
    {
        let recScrollable:      any;
        let xScrollable0:       number;
        let xScrollableWidth:   number;
        let xWindow0:           number;
        let xWindowWidth:       number;
        let xFrac:              number;
        let xPosScrollable:     number;
        let xDiff:              number;
        let xNew:               number;

        /* Retrieve geometric info */
        recScrollable           = this.fScrollTarget.nativeElement.getBoundingClientRect ();
        xScrollable0            = this.fScrollTarget.nativeElement.scrollLeft;
        xScrollableWidth        = this.fScrollTarget.nativeElement.scrollWidth;
        xWindow0                = recScrollable.left;
        xWindowWidth            = recScrollable.width;

        /* Compute scroll corrector */

        /* Adjust boundaries of sliding window - to get get better scrolling at the ends.
           We need to decrease the width by twice the left adjustment! */
        xWindow0      +=  50;
        xWindowWidth  -= 100;

        /* Compute fraction of cursor position to entire width */
        xFrac = (this.fX - xWindow0) / xWindowWidth;

        /* Clamp fraction so we avoid bad values */
        if (xFrac < 0)
        {
            xFrac = 0;
        }
        else if (xFrac > 1)
        {
            xFrac = 1;
        }

        /* Determine scrolling to match cursor position and scrollable position */
        xPosScrollable = xFrac * (xScrollableWidth - xWindowWidth);

        /* Compute absolute error */
        xDiff = xPosScrollable - xScrollable0;

        /* For each iteration cycle we adjust by a fraction of the difference. This will approximate
           the target position with successive iterations, resulting in a smooth scrolling experience. */
        xNew = xScrollable0 + xDiff / 4;

        /* Apply scrolling */
        this.fScrollTarget.nativeElement.scrollLeft = xNew;
    }
}
