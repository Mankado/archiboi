#!/bin/bash

# Define backup directory
BACKUP_DIR="/mnt/ssd/backup"  # Replace <USB_LABEL> with your USB drive label

# Ensure the script is run with sudo
if [ "$EUID" -ne 0 ]; then
    echo "Please run this script with sudo."
    exit 1
fi

# Step A: Backup installed packages
echo "Backing up installed packages..."
sudo -u "$SUDO_USER" pacman -Qqe > /home/$SUDO_USER/package_list.txt
if command -v yay &>/dev/null; then
    sudo -u "$SUDO_USER" yay -Qqe > /home/$SUDO_USER/aur_package_list.txt
elif command -v paru &>/dev/null; then
    sudo -u "$SUDO_USER" paru -Qqe > /home/$SUDO_USER/aur_package_list.txt
fi
cp /home/$SUDO_USER/package_list.txt $BACKUP_DIR/
cp /home/$SUDO_USER/aur_package_list.txt $BACKUP_DIR/ 2>/dev/null

# Step B: Backup modified config files
echo "Backing up modified config files..."
pacman -Qii | awk '/^MODIFIED/ { print $2 }' > /home/$SUDO_USER/modified_configs.txt
tar -cvf /home/$SUDO_USER/modified_configs.tar -T /home/$SUDO_USER/modified_configs.txt
cp /home/$SUDO_USER/modified_configs.tar $BACKUP_DIR/

# Step C: Backup untracked files in /etc
echo "Backing up untracked files in /etc..."
find /etc -type f | sort > /tmp/all_etc_files.txt
pacman -Qlq | sort -u > /tmp/package_owned_files.txt
comm -23 /tmp/all_etc_files.txt /tmp/package_owned_files.txt > /home/$SUDO_USER/untracked_etc_files.txt
tar -cvf /home/$SUDO_USER/untracked_etc_files.tar -T /home/$SUDO_USER/untracked_etc_files.txt
cp /home/$SUDO_USER/untracked_etc_files.tar $BACKUP_DIR/
rm /tmp/all_etc_files.txt /tmp/package_owned_files.txt  # Clean up temporary files

# Step D: Backup /home directory
echo "Backing up /home directory..."
EXCLUDE_FILE="/home/$SUDO_USER/home_backup.tar.gz"
tar --exclude=$EXCLUDE_FILE -cvpzf /home/$SUDO_USER/home_backup.tar.gz /home
cp /home/$SUDO_USER/home_backup.tar.gz $BACKUP_DIR/

echo "Backup completed. Files saved to $BACKUP_DIR."
