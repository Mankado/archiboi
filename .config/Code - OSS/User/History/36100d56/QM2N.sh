#!/bin/bash

# Define backup directory
BACKUP_DIR="/run/media/$USER/<USB_LABEL>"  # Replace <USB_LABEL> with your USB drive label

# Step A: Backup installed packages
echo "Backing up installed packages..."
pacman -Qqe > ~/package_list.txt
if command -v yay &>/dev/null; then
    yay -Qqe > ~/aur_package_list.txt
elif command -v paru &>/dev/null; then
    paru -Qqe > ~/aur_package_list.txt
fi
cp ~/package_list.txt $BACKUP_DIR/
cp ~/aur_package_list.txt $BACKUP_DIR/ 2>/dev/null

# Step B: Backup modified config files
echo "Backing up modified config files..."
pacman -Qii | awk '/^MODIFIED/ { print $2 }' > ~/modified_configs.txt
tar -cvf ~/modified_configs.tar -T ~/modified_configs.txt
cp ~/modified_configs.tar $BACKUP_DIR/

# Step C: Backup untracked files in /etc
echo "Backing up untracked files in /etc..."
comm -23 <(find /etc -type f | sort) <(pacman -Qlq | sort | uniq) > ~/untracked_etc_files.txt
tar -cvf ~/untracked_etc_files.tar -T ~/untracked_etc_files.txt
cp ~/untracked_etc_files.tar $BACKUP_DIR/

# Step D: Backup /home directory
echo "Backing up /home directory..."
tar -cvpzf ~/home_backup.tar.gz /home
cp ~/home_backup.tar.gz $BACKUP_DIR/

echo "Backup completed. Files saved to $BACKUP_DIR."
