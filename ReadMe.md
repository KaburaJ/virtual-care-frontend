This repository contains a maternity fitness application called Virtual Care. <br> <br> 
It is hosted hence use the instructions below to run it locally on your PC.

1. First, download this repository's code to your local machine by clicking the green 'code' button on this page and selecting 'download zip'.

1. Open VS Code's new window and open the extracted folder.

1. Your files and folders should look like this. This means that while openning the folder, you click twice on the folder in question.
![image](https://github.com/KaburaJ/virtual-care-frontend/assets/99409674/d5019f3e-3eb7-4aad-8bdd-a5b582ebc767)

1. And here comes the fun part! On the very top of VS Code, there is a `terminal` tab. Click on it and create a new terminal.
![Screenshot (588)](https://github.com/KaburaJ/virtual-care-frontend/assets/99409674/467baef6-1c00-4510-be62-2fed199e5d02)

1. By now, your VS Code interface should resemble this.
![image](https://github.com/KaburaJ/virtual-care-frontend/assets/99409674/d3b6c01e-40ea-4ba5-b8ab-39285d31c6b3)

1. We now want to install the dependencies. Assuming that you have NodeJS installed, run the following commands in order.
   i. `cd Client` Hit enter
   i. `npm install` Hit enter
   then,
   i. `npm start` Hit enter
   By now, an interface on `http://locolhost:3000` will be opened on your default browser. Just a few more steps and you can use the app.
1. Create a second terminal the same way we created the above. Run the commands below.
   i. `cd Server/Auth` Hit enter
   , then,
   i. `npm install` Hit enter
   i. `npm start`
1. Create a third terminal the same way we created the above. Run the commands below.
   i. `cd Server/Live` Hit enter
   , then,
   i. `npm install` Hit enter
   i. `npm start`
1. Create a fourth terminal the same way we created the above. Run the commands below.
   i. `cd Server/Logic` Hit enter
   , then,
   i. `npm install` Hit enter
   i. `npm start`

That's it! You should now be able to access the app's capabilities. Enjoy!
