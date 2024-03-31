import inquirer from "inquirer";
let todos = [];
let condition = true;
async function main() {
    while (condition) {
        let addTask = await inquirer.prompt([
            {
                name: 'todo',
                type: 'input',
                message: 'What do you want to add to your Todos?'
            },
            {
                name: 'action',
                type: 'list',
                message: 'Select an action:',
                choices: ['Add More', 'Push Value', 'Pop Value', 'Concatenate Value', 'Exit']
            }
        ]);
        switch (addTask.action) {
            case 'Add More':
                todos.push(addTask.todo);
                break;
            case 'Push Value':
                let pushValue = await inquirer.prompt({
                    name: 'value',
                    type: 'input',
                    message: 'Enter the value to push:'
                });
                todos.push(pushValue.value);
                break;
            case 'Pop Value':
                let poppedValue = todos.pop();
                if (poppedValue !== undefined) {
                    console.log(`Popped value: ${poppedValue}`);
                }
                else {
                    console.log("The todos list is empty.");
                }
                break;
            case 'Concatenate Value':
                let concatValue = await inquirer.prompt({
                    name: 'value',
                    type: 'input',
                    message: 'Enter the value to concatenate:'
                });
                todos = todos.concat(concatValue.value.split(','));
                break;
            case 'Exit':
                condition = false;
                break;
            default:
                console.log('Invalid action.');
        }
        console.log('Todos:', todos);
    }
}
main().then(() => console.log('Exiting todo app.'));
