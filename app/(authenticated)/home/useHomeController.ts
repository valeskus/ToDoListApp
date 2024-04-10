import React from "react";
import { useAddToDoItem, useGetToDoList, useToDoListStore } from "../../../src/stores/toDoList/hooks"
import { useUserStore } from "../../../src/stores/user/hooks";

export const useHomeController = () => {
    const [isLoading, setLoading] = React.useState(false);

    const toDos = useToDoListStore();
    const addTodo = useAddToDoItem();
    const getToDoList = useGetToDoList();
    const {id: userId} = useUserStore();

    const addItem = React.useCallback(async () => {
        setLoading(true);

        await addTodo({
            title: String('title' + Date.now()),
            description: String('description' + Date.now()),
        });

        setLoading(false);
    }, []);

    React.useEffect(() => {
        if(!userId) {
            return;
        }

        setLoading(true);

        getToDoList().then(() => setLoading(false));
    }, []);

    return {
        isLoading,
        userId,
        addItem,
        toDos: toDos.items.sort((prevItem, nextItem) => prevItem.index - nextItem.index)
    }
}