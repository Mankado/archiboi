#!/bin/bash

# Update system
echo "Updating system packages..."
sudo pacman -Syu --noconfirm

# Install base dependencies
echo "Installing GTK, GJS, and other dependencies..."
sudo pacman -S --noconfirm \
  gtk3 \
  gjs \
  libpeas \
  gobject-introspection-runtime \
  sassc \
  libnotify \
  meson vala libnm gdk-pixbuf2 gvfs json-glib gobject-introspection #Mpris

# Install AUR helper if not installed
if ! command -v yay &> /dev/null; then
  echo "Installing yay (AUR helper)..."
  git clone https://aur.archlinux.org/yay.git
  cd yay
  makepkg -si --noconfirm
  cd ..
  rm -rf yay
fi

# Install AUR packages for Astal and AGS
echo "Installing Astal and AGS dependencies..."
yay -S --noconfirm \
  astal \
  #ags-git \
  #hyprland

# Verify GObject Introspection modules
echo "Checking for GObject Introspection (gi://) dependencies..."
required_gi_modules=("AstalBattery" "AstalBluetooth" "AstalHyprland" "AstalMpris" "AstalNetwork" "AstalSystemTray")
for module in "${required_gi_modules[@]}"; do
  if ! g-ir-inspect "$module" &> /dev/null; then
    echo "GObject Introspection module $module is missing. Please verify its installation or consult documentation."
  else
    echo "$module is available."
  fi
done

echo "All dependencies should now be installed."
