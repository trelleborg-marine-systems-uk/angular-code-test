# Trelleborg Marine Systems UK - Developer Test

##Tools Used:

1. [Node](https://nodejs.org/dist/v12.18.3/node-v12.18.3-x64.msi) version 12.18.3 LTS
2. [NPM](https://www.npmjs.com/get-npm) version 6.14.8
3. [Angular CLI](https://github.com/angular/angular-cli) version 10.1.0.
4. [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/#/documentation#getting-started) Bootstrap 4

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Test Brief

To gain an idea of developer capability in understanding and developing with technologies currently used at Trelleborg Marine Systems UK, this project will cover 
some key aspects of Angular. It should be noted - this is not a timed test, there is no expectation the developer should have pre-existing knowledge of Angular, 
this provides a demonstration of problem solving, self-sufficiency and task completion.

When completing a task please use: `//` or `<!-- -->` with TASK: [TASK Number] indicating the area that completes the task.  

e.g

`<!-- TASK: 1 Add heading to Home component -->`

`<h1>I Added a Heading</h1>`

or 

`// TASK: 2 Populate list with things`

`let listOfThings = {"thingOne","thingTwo"}`

### Tasks


#### 1. The title in the card on Home and List pages differ. Think of a solution to fix this.
#### 2. Align the buttons in the footers to the right.
#### 3. Having static information in the list does not allow for easy updating - Can this be remedied using Angular.

#### 4. Weather list component:
   <p>
       This part is to test your general Angular/HTML/UX knowledge.
        
       This component contains a simple input field for which you can add a city along with some default temperature readings to a table.
       There are a few bugs with this component. 
       
       The goal is to fix these issues, as well as address any user experience inconsistencies you may find along the way.
       ##### Bonus - if you could implement the ability for a user to remove a city from the table.
   </p>
   
#### 5. Weather view component:
    <p>
        For this, you will need to make use of the provided WeatherService in order to make API calls.
        
        You will need to create a component, call it 'WeatherViewComponent'.
        
        The objective here is to create a reactive form, which takes a city name as an input, that must have some input validation,
        and calls the Open Weather API to retrieve the latest weather information found for that city. 
        If the user enters an invalid input (according to your validation rules), then UI must display the violation
        
        The data that is retrieved from the API should be displayed in a suitable format (whether as a list group, table, separate component etc. is up to you).
        The component you create should also output to the user whether there was an error whilst retrieving information from the API.
        
        ##### Bonus - You could ???????
    </p>



