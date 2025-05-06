import { register } from './widgets/widget.fs';
import { newBox as Box } from './widgets/box.fs';
import { newButton as Button } from './widgets/button.fs';
import { newCalendar as Calendar } from './widgets/calendar.fs';
import { newCenterBox as CenterBox } from './widgets/centerbox.fs';
import { newCircularProgress as CircularProgress } from './widgets/circularprogress.fs';
import { newColorButton as ColorButton } from './widgets/colorbutton.fs';
import { newDrawingArea as DrawingArea } from './widgets/drawingarea.fs';
import { newEntry as Entry } from './widgets/entry.fs';
import { newEventBox as EventBox } from './widgets/eventbox.fs';
import { newFileChooserButton as FileChooserButton } from './widgets/filechooserbutton.fs';
import { newFixed as Fixed } from './widgets/fixed.fs';
import { newFlowBox as FlowBox } from './widgets/flowbox.fs';
import { newFontButton as FontButton } from './widgets/fontbutton.fs';
import { newIcon as Icon } from './widgets/icon.fs';
import { newLabel as Label } from './widgets/label.fs';
import { newLevelBar as LevelBar } from './widgets/levelbar.fs';
import { newListBox as ListBox } from './widgets/listbox.fs';
import { newMenu as Menu } from './widgets/menu.fs';
import { newMenuBar as MenuBar } from './widgets/menubar.fs';
import { newMenuItem as MenuItem } from './widgets/menuitem.fs';
import { newOverlay as Overlay } from './widgets/overlay.fs';
import { newProgressBar as ProgressBar } from './widgets/progressbar.fs';
import { newRevealer as Revealer } from './widgets/revealer.fs';
import { newScrollable as Scrollable } from './widgets/scrollable.fs';
import { newSeparator as Separator } from './widgets/separator.fs';
import { newSlider as Slider } from './widgets/slider.fs';
import { newSpinButton as SpinButton } from './widgets/spinbutton.fs';
import { newSpinner as Spinner } from './widgets/spinner.fs';
import { newStack as Stack } from './widgets/stack.fs';
import { newSwitch as Switch } from './widgets/switch.fs';
import { newToggleButton as ToggleButton } from './widgets/togglebutton.fs';
import { newWindow as Window } from './widgets/window.fs';
// ts can't compile export default { subclass, Box, Button ... }
// so we use a function and add members to it instead
// to bundle everything in a default export
export default function W(Base, typename = Base.name) {
    var _a;
    class Subclassed extends Base {
        constructor(...params) { super(...params); }
    }
    _a = Subclassed;
    (() => {
        register(_a, { typename });
    })();
    return (props) => {
        return new Subclassed(props);
    };
}
export { register, W as subclass, Box, Button, Calendar, CenterBox, CircularProgress, ColorButton, DrawingArea, Entry, EventBox, FileChooserButton, Fixed, FlowBox, FontButton, Icon, Label, LevelBar, ListBox, Menu, MenuBar, MenuItem, Overlay, ProgressBar, Revealer, Scrollable, Separator, Slider, SpinButton, Spinner, Stack, Switch, ToggleButton, Window, };
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
