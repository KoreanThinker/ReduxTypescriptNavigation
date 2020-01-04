//액션 type 선언
const REMOVE = 'todo/REMOVE' as const;
const SETLINE = 'todo/SETLINE' as const;
const APPEND = 'todo/APPEND' as const;

//액션 생성 함수 선언
export const remove = (id: number) => ({ type: REMOVE, id });
export const setline = (id: number) => ({ type: SETLINE, id });
export const append = (text: string) => ({ type: APPEND, text });

//리듀서 type 지정
type TodoAction =
    | ReturnType<typeof remove>
    | ReturnType<typeof setline>
    | ReturnType<typeof append>;

export type TodoList = {
    text: string;
    isLine: boolean;
    id: number;
}

type TodoState = {
    list: TodoList[];
}

const initialState: TodoState = {
    list: []
};

//리듀서
function todo(state: TodoState = initialState, action: TodoAction): TodoState {
    switch (action.type) {
        case REMOVE:
            return { ...state, list: state.list.filter(val => val.id !== action.id) }
        case SETLINE:
            return { ...state, list: state.list.map(val => val.id === action.id ? { ...val, isLine: !val.isLine } : val) }
        case APPEND:
            const id = Math.max(...state.list.map(val => val.id));
            return { ...state, list: state.list.concat({ text: action.text, isLine: false, id: id === -Infinity ? 0 : id + 1 }) }
        default:
            return state;
    }
}

export default todo;