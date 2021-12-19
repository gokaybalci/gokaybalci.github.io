#!/bin/bash


sudo echo " "
echo "BEFORE YOU DO ANYTHING. PLEASE CHANGE YOUR TERMINAL'S SETTINGS TO ALLOW 10,000 LINES. THIS IS DIFFERENT FROM BASH HISTORY."
echo " "
echo "GO DO THAT NOW PLEASE."
sleep 10
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "
echo "WELCOME TO YOUR NEW SYSTEM."
echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "
echo " "
echo " "
sleep 5

echo "LET'S GET STARTED. IN..."
sleep 1
echo "3..."
sleep 1
echo "2..."
sleep 1
echo "1..."
sleep 1
echo " "
echo " "
echo "GO!"
sleep 1


### Here's where the SYSTEM TWEAKS go
echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "
echo "Let's begin by tweaking the system a bit..."
echo " "
echo " "
sleep 4

#Create a hidden bin directory in /Home
echo "CREATING HIDDEN BIN DIRECTORY IN /Home"
sleep 2
echo " "
mkdir -v ~/.bin

echo " "
echo "SUCCESFULLY CREATED ~/.bin"
echo " "
sleep 4


echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "


### Bring the system up to date. 
echo "STARTING PACMAN AND UPDATING..."
echo " "
sleep 4

sudo pacman-mirrors --geoip
sudo pacman -Syyuu --noconfirm
sleep 4

echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "



#Enable the Firewall
echo "THE FIREWALL WILL NOW BE ENABLED..."
echo " "
sleep 4

sudo pacman -S --noconfirm ufw
echo "UFW Firewall has been installed"
sudo systemctl enable ufw.service
sudo ufw enable
sleep 4

echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "


##### SOFTWARE ESSENTIALS KIT
echo "INSTALLING SOFTWARE ESSENTIALS"
echo " "
echo " "
sleep 4

###If setting up a modern computer for a family member with plenty of RAM to spare, consider the 'preload' package from the Repositories.

## ABSOLUTE UNIVERSAL ESSENTIALS
#Regardless of your choice of distro, I feel these should just come with every Linux system. Some programs listed here may already be included in your distro.)
#I just want this next line to install the minimumal number of packages needed to make life with paru/trizen easier. Stuff that helps install AUR packages. Help?
sudo pacman -S --verbose --noconfirm base-devel fakeroot gcc guilw binutils groff gettext sudo texinfo pacman gawk bison autoconf automake elfutils make findutils libtool file flex m4 grep sed gc patch gzip fakeroot libmpc pkgconf which lib32-fakeroot visudo autoconf automake bison flex m4 cmake make diffutils gcc lib32-gcc-libs papirus-icon-theme


##This next line is entirely up to you. Change it as you wish.
sudo pacman -S --verbose --noconfirm rsync yay gufw steam bitwarden telegram-desktop neofetch youtube-dl smartmontools bitwarden gparted htop kvantum-qt5 transmission-gtk vlc zsh zsh-theme-powerlevel10k python

#I really need to organize...
sudo pacman -S --noconfirm exfat-utils exfatprogs ntfs-3g base-devel cmake p7zip p7zip-plugins unrar tar rsync kdialog org.freedesktop.secrets
#Gotta have my fonts!
sudo pacman -S --noconfirm adobe-source-code-pro-fonts adobe-source-sans-fonts nerd-fonts-noto-sans-mono ttc-iosevka ttf-meslo-nerd-font-powerlevel10k

## AUR Packages:
yay -S --noconfirm mailspring noisetorch-bin megatools-bin konsave nerd-fonts-source-code-pro ttf-meslo-nerd-font-powerlevel10k papirus-folders kvantum-qt5 timeshift


sleep 4



echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "
echo "GAMING..."
echo " "
sleep 4
sudo pacman -S --noconfirm lutris wine-staging winetricks lib32-gnutls lib32-libldap lib32-libgpg-error lib32-sqlite lib32-libpulse lib32-alsa-plugins gamemode gtk2 lib32-gtk2 lib32-gamemode linux-steam-integration amd-ucode manjaro-tools-pkg pcre pcre2 lib32-pcre lib32-pcre2 util-linux util-linux-libs lib32-util-linux xz lib32-xz giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse libgpg-error lib32-libgpg-error alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo sqlite lib32-sqlite libxcomposite lib32-libxcomposite libxinerama lib32-libgcrypt libgcrypt lib32-libxinerama ncurses lib32-ncurses opencl-icd-loader lib32-opencl-icd-loader libxslt lib32-libxslt libva lib32-libva gtk3 lib32-gtk3 gst-plugins-base-libs lib32-gst-plugins-base-libs vulkan-icd-loader lib32-vulkan-icd-loader



echo " "
echo " "
echo "Garuda Gaming Performance Tweaks..."
echo " "
echo " "
echo " "
echo " "
echo " "
sleep 4
sudo sysctl -w net.core.netdev_max_backlog=16384
sudo sysctl -w net.core.somaxconn=8192
sudo sysctl -w net.core.rmem_default=1048576
sudo sysctl -w net.core.rmem_max=16777216
sudo sysctl -w net.core.wmem_default=1048576
sudo sysctl -w net.core.wmem_max=16777216
sudo sysctl -w net.core.optmem_max=65536
sudo sysctl -w net.ipv4.tcp_rmem=4096 1048576 2097152
sudo sysctl -w net.ipv4.tcp_wmem=4096 65536 16777216
sudo sysctl -w net.ipv4.udp_rmem_min=8192
sudo sysctl -w net.ipv4.udp_wmem_min=8192
sudo sysctl -w net.ipv4.tcp_fastopen=3
sudo sysctl -w net.ipv4.tcp_max_syn_backlog=8192
sudo sysctl -w net.ipv4.tcp_max_tw_buckets=2000000
sudo sysctl -w vm.swappiness=10
sleep 5

# Remove Firefox, install Ungoogled-Chromium
# Latest release:https://ungoogled-software.github.io/ungoogled-chromium-binaries/releases/manjaro/ :

sudo pacman -R --noconfirm firefox
if [ -d "/home/$USER/.mozilla" ]; then
    rm -rf /home/$USER/.mozilla
fi
if [ -d "/home/$USER/.cache/mozilla" ]; then
    rm -rf /home/$USER/.cache/mozilla
fi
mkdir /tmp/uc-install-tmp
pushd /tmp/uc-install-tmp
wget https://github.com/zocker-160/ungoogled-chromium-binaries/releases/download/94.0.4606.61-1/ungoogled-chromium-94.0.4606.61-1-Manjaro-x86_64.pkg.tar.zst
cd /tmp/uc-install-tmp
sudo pacman -U --noconfirm ungoogled-chromium-94.0.4606.61-1-Manjaro-x86_64.pkg.tar.zst
popd
rm -rf /tmp/uc-install-tmp

###
echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "



echo "RICE SETUP INCOMING"
echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "
sleep 5
cd "$(dirname "${BASH_SOURCE}")";

git clone https://github.com/gokaybalci/dotfiles.git;

function doIt() {
	rsync --exclude ".git/" \
		--exclude "README.md" \
		--exclude "LICENSE-MIT.txt" \
		-avh --no-perms . ~;
	source ~/.bash_profile;
}

if [ "$1" == "--force" -o "$1" == "-f" ]; then
	doIt;
else
	read -p "This may overwrite existing files in your home directory. Are you sure? (y/n) " -n 1;
	echo "";
	if [[ $REPLY =~ ^[Yy]$ ]]; then
		doIt;
	fi;
fi;
unset doIt;

##

cd ~/dotfiles
megatools dl https://mega.nz/file/lCQXEC5b#XkjR0GkHd5y4hhERrbnNmsEY-hhAnF7Cv7apErWn1-Q
konsave -i ~/dotfiles/kde.knsv
konsave -a kde
papirus-folders -C orange --theme Papirus-Dark

###
echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "



echo "BEGIN CLEAN UP PROCESS"
### CLEAN UP PROCESS
echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "
sleep 5
echo "CREATING REMINDERS..."
## This next section? Change the reminders for whatever you want them to be.
echo " "
sleep 4
echo "Reduce the GRUB timeout to zer(0) and add 'GRUB_HIDDEN_TIMEOUT_QUIET=true' underneath TIMEOUT" >> ~/Documents/Post-Install-Reminders.txt
echo "Create this file '/etc/sysctl.d/100-manjaro.conf' and add the line 'vm.swappiness=10' to it." >> ~/Documents/Post-Install-Reminders.txt
echo "Tweak your Terminal settings for both Konsole. Extend the readback lines to like 10,000 or something." >> ~/Documents/Post-Install-Reminders.txt
echo "Visit https://wiki.archlinux.org/index.php/improving_performance how to improve system performance." >> ~/Documents/Post-Install-Reminders.txt

echo " " >> ~/Documents/Post-Install-Reminders.txt
echo " " >> ~/Documents/Post-Install-Reminders.txt
echo "All that stuff with 'vm.swappiness' and similar things you're gonna have to search the Internet to make sure those settings are permanent. Or, they'll get wiped the next time you turn off or reboot your computer." >> ~/Documents/Post-Install-Reminders.txt
echo " " >> ~/Documents/Post-Install-Reminders.txt


echo "DON'T FORGET:"
cat ~/Documents/Post-Install-Reminders.txt
sleep 10

echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "

###Time to update Grub and mlocate
echo " "
echo " "
sleep 6
echo "UPDATING grub AND mlocate DATABASE"
echo " "
sleep 4
sudo update-grub
sudo updatedb
echo " "
sleep 2
echo "DONE"
echo " "
sleep 4


echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "

###Good idea to enable TRIM
echo "ENABLING TRIM ON SSD..."
echo " "
sleep 4

sudo systemctl status fstrim.timer # disabled; inactive (default)
sudo systemctl enable fstrim.timer
sudo systemctl start fstrim.timer


echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "

### Make some tweaks to Swappiness and Cache Pressure

sleep 4
echo "TWEAKING YOUR SYSTEM'S SWAPPINESS AND VM CACHE PRESSURE"
echo " "
sleep 4
sudo sysctl vm.swappiness=40
sudo sysctl -a | grep 'vm.swappiness'
sudo sysctl vm.vfs_cache_pressure=50
sudo sysctl -a | grep 'vm.vfs_cache_pressure'
##The next one you will have to set yourself
#sudo sysctl vm.min_free_kbytes=


sleep 4
echo " "
echo " "
echo "====================================================================================================================================================="
echo " "
echo " "

echo " "
sleep 3
echo "ALL DONE. SCRIPT COMPLETE. REBOOT RECOMMENDED."
echo " "
sleep 4

exit


### Thank you for using, reading, and/or critiquing my shell script. You're awesome.
