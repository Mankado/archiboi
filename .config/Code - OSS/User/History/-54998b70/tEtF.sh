#!/bin/bash

# Define backup directory
BACKUP_DIR="/run/media/$USER/<USB_LABEL>"  # Replace <USB_LABEL> with your USB drive label

# Step 1: Restore installed packages
echo "Restoring installed packages..."
if [ -f "$BACKUP_DIR/package_list.txt" ]; then
    pacstrap /mnt $(cat "$BACKUP_DIR/package_list.txt")
else
    echo "Package list not found. Skipping..."
fi

if [ -f "$BACKUP_DIR/aur_package_list.txt" ]; then
    if command -v yay &>/dev/null; then
        yay -S $(cat "$BACKUP_DIR/aur_package_list.txt")
    elif command -v paru &>/dev/null; then
        paru -S $(cat "$BACKUP_DIR/aur_package_list.txt")
    fi
else
    echo "AUR package list not found. Skipping..."
fi

# Step 2: Restore modified config files
echo "Restoring modified config files..."
if [ -f "$BACKUP_DIR/modified_configs.tar" ]; then
    tar -xvf "$BACKUP_DIR/modified_configs.tar" -C /
else
    echo "Modified config files not found. Skipping..."
fi

# Step 3: Restore untracked /etc files
echo "Restoring untracked /etc files..."
if [ -f "$BACKUP_DIR/untracked_etc_files.tar" ]; then
    tar -xvf "$BACKUP_DIR/untracked_etc_files.tar" -C /
else
    echo "Untracked /etc files not found. Skipping..."
fi

# Step 4: Restore /home directory
echo "Restoring /home directory..."
if [ -f "$BACKUP_DIR/home_backup.tar.gz" ]; then
    tar -xvpf "$BACKUP_DIR/home_backup.tar.gz" -C /
else
    echo "/home backup not found. Skipping..."
fi

echo "System restore completed."
