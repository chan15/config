swapname='/swapfile'

if [ ! $# -eq 0 ]; then
    swapname="/$1"
fi

sudo fallocate -l 1G $swapname
sudo chmod 600 $swapname
sudo mkswap $swapname
sudo swapon $swapname
echo "$swapname swap swap sw 0 0" | sudo tee -a /etc/fstab
