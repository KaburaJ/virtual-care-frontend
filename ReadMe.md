This repository contains a maternity fitness application called Virtual Care. <br> <br> 
It is hosted hence use the instructions below to run it locally on your PC.

1. First, download this repository's code to your local machine by clicking the green 'code' button on this page and selecting 'download zip'.

![image](https://github.com/KaburaJ/virtual-care-frontend/assets/99409674/ba0c1ab3-e9fb-48f3-8cb1-d315c6ba2f36)

1. Open VS Code's new window and open the extracted folder.
![image](https://github.com/KaburaJ/virtual-care-frontend/assets/99409674/27b2491f-b07c-4cda-8650-0ad92d186316)

1. Your files and folders should look like this. This means that while openning the folder, you click twice on the folder in question.
![image](https://github.com/KaburaJ/virtual-care-frontend/assets/99409674/f55b5080-15af-4306-bd55-38e34d2dc53e)

1. And here comes the fun part! On the very top of VS Code, there is a `terminal` tab. Click on it and create a new terminal.
![Screenshot (588)](https://github.com/KaburaJ/virtual-care-frontend/assets/99409674/f3cfe65f-7415-40d8-92f6-2ac95cda45e0)

1. By now, your VS Code interface should resemble this.
![image](https://github.com/KaburaJ/virtual-care-frontend/assets/99409674/6270d5b3-5293-4c28-8843-9350a6c2c05c)

1. We now want to install the dependencies. Assuming that you have NodeJS installed, run the following commands in order.
   i. `cd Client` Hit enter
   i. `npm install` Hit enter
   then,
   i. `npm start` Hit enter
   By now, an interface on `http://locolhost:3000` will be opened on your default browser. Just a few more steps and you can use the app.
1. Create a second terminal the same way we created the above. Run the commands below.
   i. `cd Server/Auth` Hit enter
   , then,
   i. `npm start`
1. Create a third terminal the same way we created the above. Run the commands below.
   i. `cd Server/Live` Hit enter
   , then,
   i. `npm start`
1. Create a fourth terminal the same way we created the above. Run the commands below.
   i. `cd Server/Logic` Hit enter
   , then,
   i. `npm start`

That's it! You should now be able to access the app's capabilities. Enjoy!
