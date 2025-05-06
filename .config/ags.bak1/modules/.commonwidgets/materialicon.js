import Widget from 'file:///home/tomingo/Downloads/ags-1.9.0/src/widget.js' //'resource:///com/github/Aylur/ags/widget.js';

export const MaterialIcon = (icon, size, props = {}) => Widget.Label({
    className: `icon-material txt-${size}`,
    label: icon,
    ...props,
})
