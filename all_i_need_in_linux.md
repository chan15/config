# All I need in Linux

### vim

[http://vim.chan15.info/](http://vim.chan15.info/ "http://vim.chan15.info/")

### composer

[https://getcomposer.org/download/](https://getcomposer.org/download/ "https://getcomposer.org/download/")

    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
    php -r "if (hash_file('SHA384', 'composer-setup.php') === 'e115a8dc7871f15d853148a7fbac7da27d6c0030b848d9b3dc09e2a0388afed865e6a3d6b3c0fad45c48e2b5fc1196ae') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
    php composer-setup.php
    php -r "unlink('composer-setup.php');"

---

    sudo composer require friendsofphp/php-cs-fixer

### nodejs

[https://nodejs.org/en/download/package-manager/](https://nodejs.org/en/download/package-manager/ "https://nodejs.org/en/download/package-manager/")

    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -

---

	sudo aptitude install nodejs
	sudo npm install -g tldr --ignore-scripts
	sudo npm install -g npm-check
	sudo npm install -g jshint
