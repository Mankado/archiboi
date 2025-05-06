import Gtk from 'gi://Gtk?version=3.0';
import { register, type BaseProps, type Widget as TWidget } from './widgets/widget.ts';
import { newBox as Box } from './widgets/box.ts';
import { newButton as Button } from './widgets/button.ts';
import { newCalendar as Calendar } from './widgets/calendar.ts';
import { newCenterBox as CenterBox } from './widgets/centerbox.ts';
import { newCircularProgress as CircularProgress } from './widgets/circularprogress.ts';
import { newColorButton as ColorButton } from './widgets/colorbutton.ts';
import { newDrawingArea as DrawingArea } from './widgets/drawingarea.ts';
import { newEntry as Entry } from './widgets/entry.ts';
import { newEventBox as EventBox } from './widgets/eventbox.ts';
import { newFileChooserButton as FileChooserButton } from './widgets/filechooserbutton.ts';
import { newFixed as Fixed } from './widgets/fixed.ts';
import { newFlowBox as FlowBox } from './widgets/flowbox.ts';
import { newFontButton as FontButton } from './widgets/fontbutton.ts';
import { newIcon as Icon } from './widgets/icon.ts';
import { newLabel as Label } from './widgets/label.ts';
import { newLevelBar as LevelBar } from './widgets/levelbar.ts';
import { newListBox as ListBox } from './widgets/listbox.ts';
import { newMenu as Menu } from './widgets/menu.ts';
import { newMenuBar as MenuBar } from './widgets/menubar.ts';
import { newMenuItem as MenuItem } from './widgets/menuitem.ts';
import { newOverlay as Overlay } from './widgets/overlay.ts';
import { newProgressBar as ProgressBar } from './widgets/progressbar.ts';
import { newRevealer as Revealer } from './widgets/revealer.ts';
import { newScrollable as Scrollable } from './widgets/scrollable.ts';
import { newSeparator as Separator } from './widgets/separator.ts';
import { newSlider as Slider } from './widgets/slider.ts';
import { newSpinButton as SpinButton } from './widgets/spinbutton.ts';
import { newSpinner as Spinner } from './widgets/spinner.ts';
import { newStack as Stack } from './widgets/stack.ts';
import { newSwitch as Switch } from './widgets/switch.ts';
import { newToggleButton as ToggleButton } from './widgets/togglebutton.ts';
import { newWindow as Window } from './widgets/window.ts';

// ts can't compile export default { subclass, Box, Button ... }
// so we use a function and add members to it instead
// to bundle everything in a default export
export default function W<
    T extends { new(...args: any[]): Gtk.Widget },
    Props,
>(
    Base: T, typename = Base.name,
) {
    class Subclassed extends Base {
        static { register(this, { typename }); }
        constructor(...params: any[]) { super(...params); }
    }
    type Instance<Attr> = InstanceType<typeof Subclassed> & TWidget<Attr>;
    return <Attr>(props: BaseProps<Instance<Attr>, Props, Attr>) => {
        return new Subclassed(props) as Instance<Attr>;
    };
}

export {
    register,
    W as subclass,
    Box,
    Button,
    Calendar,
    CenterBox,
    CircularProgress,
    ColorButton,
    DrawingArea,
    Entry,
    EventBox,
    FileChooserButton,
    Fixed,
    FlowBox,
    FontButton,
    Icon,
    Label,
    LevelBar,
    ListBox,
    Menu,
    MenuBar,
    MenuItem,
    Overlay,
    ProgressBar,
    Revealer,
    Scrollable,
    Separator,
    Slider,
    SpinButton,
    Spinner,
    Stack,
    Switch,
    ToggleButton,
    Window,
};

W.register = register;
W.subclass = W;
W.Box = Box;
W.Button = Button;
W.Calendar = Calendar;
W.CenterBox = CenterBox;
W.CircularProgress = CircularProgress;
W.ColorButton = ColorButton;
W.DrawingArea = DrawingArea;
W.Entry = Entry;
W.EventBox = EventBox;
W.FileChooserButton = FileChooserButton;
W.Fixed = Fixed;
W.FlowBox = FlowBox;
W.FontButton = FontButton;
W.Icon = Icon;
W.Label = Label;
W.LevelBar = LevelBar;
W.ListBox = ListBox;
W.Menu = Menu;
W.MenuBar = MenuBar;
W.MenuItem = MenuItem;
W.Overlay = Overlay;
W.ProgressBar = ProgressBar;
W.Revealer = Revealer;
W.Scrollable = Scrollable;
W.Separator = Separator;
W.Slider = Slider;
W.SpinButton = SpinButton;
W.Spinner = Spinner;
W.Stack = Stack;
W.Switch = Switch;
W.ToggleButton = ToggleButton;
W.Window = Window;
