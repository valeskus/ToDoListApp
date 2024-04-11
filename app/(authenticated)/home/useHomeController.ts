import React, { useCallback } from "react";
import { useAddToDoItem, useEditToDoItem, useGetToDoList, useToDoListStore } from "../../../src/stores/toDoList/hooks"
import { useSignOut, useUserStore } from "../../../src/stores/user/hooks";
import { Card } from "../../../src/api/card.api";

export const useHomeController = () => {
    const [isLoading, setLoading] = React.useState(false);
    const [isFormHide, setFormHide] = React.useState(true);
    const [cardTitle, setCardTitle] = React.useState<string>('');
    const [cardDescription, setCardDescription] = React.useState<string>('');
    const [data, setData] = React.useState<Card[]>([]);

    const toDos = useToDoListStore();
    const editTodo = useEditToDoItem();
    const addTodo = useAddToDoItem();
    const getToDoList = useGetToDoList();
    const { id: userId } = useUserStore();
    const signOut = useSignOut()

    const changeFormShowing = React.useCallback(() => {
        setFormHide(!isFormHide)
    }, [isFormHide]);

    const handleCardTitle = React.useCallback((title: string) => {
        setCardTitle(title)
    }, []);

    const handleCardDescription = React.useCallback((description: string) => {
        setCardDescription(description)
    }, []);

    const addItem = React.useCallback(async () => {
        if (!cardTitle || !cardDescription) {
            return
        }
        setLoading(true);

        await addTodo({
            title: cardTitle,
            description: cardDescription,
        });
        setCardTitle('');
        setCardDescription('')
        setLoading(false);
    }, [cardTitle, cardDescription]);

    React.useEffect(() => {
        if (!userId) {
            return;
        }

        setLoading(true);

        getToDoList().then(() => setLoading(false));
    }, []);

    React.useEffect(() => {

        setData(toDos.items.sort((prevItem, nextItem) => +prevItem.index - +nextItem.index))

    }, [toDos]);

    const onReordered = React.useCallback(async (fromIndex: number, toIndex: number) => {
        if (!data) {
            return
        }
        const currentItem = data[fromIndex];
        await editTodo({
            ...currentItem,
            index: toIndex
        })

        const copy = [...data];
        const removed = copy.splice(fromIndex, 1);

        copy.splice(toIndex, 0, removed[0]);
        setData(copy);
    }, [data])


    return {
        isLoading,
        userId,
        addItem,
        toDos: data,
        isFormHide,
        changeFormShowing,
        handleCardTitle,
        handleCardDescription,
        cardTitle,
        cardDescription,
        signOut,
        onReordered
    }
}