
import data from '../../../data.json';
import Board from '../BoardView/board'
import Task from '../TaskView/task'
import List from '../ListView/list'

const boards = data.boards;
const lists = data.lists
const tasks = data.tasks

export default function listMaker(key, id='o'){
    let listToReturn = [];
    if (key == 'boards'){
        boards.map(board => {
            listToReturn.push({name:board.name, imgSrc: board.thumbnailPhoto, id:board.id})
        });
        return listToReturn
    }
    if (key == 'lists'){
        lists.map(list => {
            if (list.boardId == id){
                listToReturn.push({id: list.id,name:list.name, color: list.color, boardId: list.boardId})
            }
        });
        return listToReturn
    }
    if (key == 'tasks'){
        tasks.map(task => {
            if (task.listId == id){
                listToReturn.push({id: task.id,name:task.name, isFinished:task.isFinished, listId:task.listId, description:task.description})
            }
        });
        return listToReturn
    } 
}