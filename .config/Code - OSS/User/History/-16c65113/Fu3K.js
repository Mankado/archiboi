import * as Widget from '/home/tomingo/Downloads/ags-1.9.0/src/build/widgets.js' //'resource:///com/github/Aylur/ags/widget.js';

export const MaterialIcon = (icon, size, props = {}) => Widget.Label({
    className: `icon-material txt-${size}`,
    label: icon,
    ...props,
})
