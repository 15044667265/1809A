// 基础类型 number, string, boolean, undefined, null, void, any
var a:number = 123;

var b = '';

var c;

// 复杂类型 array
// var d: number[] = [1,2,3];
var d: Array<number> = [1,2,3];

// 对象和接口
interface IListItem{
    id?: number,
    readonly name: string,
    price: number
}
interface IData {
    code: number,
    data: {
        list: Array<IListItem>
    },
    msg: string
}

interface IListCartItem extends IListItem{
    isChecked: boolean,
    [key: string]: any
}

const g:IListCartItem = {
    id: 1000,
    name: '番茄',
    price: 3,
    isChecked: false,
    desc: ''
}

// 元祖
const e:[number, string] = [1000, ''];
// 枚举
enum F {
    'up',
    'down',
    'left',
    'right'
}

const f: F = F.down;

// 函数类型
function func(a, b, c):void{

}

const swap:(a: number, b:string)=>[string, number] = (a, b)=>{
    return [b, a]
}


// 泛型
function swapArray<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swapArray(['1', !!2]);
swapArray<string, boolean>(['1', !!2]);


// 泛型约束
var cookies = {
    get: ()=>{},
    set: ()=>{},
    remove: ()=>{}
}
function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}
pick(cookies, ['get', 'set']);