import React from "react";
import { useAddToDoItem, useGetToDoList, useToDoListStore } from "../../../src/stores/toDoList/hooks"
import { useSignOut, useUserStore } from "../../../src/stores/user/hooks";

export const useHomeController = () => {
    const [isLoading, setLoading] = React.useState(false);
    const [isFormHide, setFormHide] = React.useState(true);
    const [cardTitle, setCardTitle] = React.useState<string>('');
    const [cardDescription, setCardDescription] = React.useState<string>('');

    const toDos = useToDoListStore();
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

    return {
        isLoading,
        userId,
        addItem,
        toDos: toDos.items.sort((prevItem, nextItem) => prevItem.index - nextItem.index),
        isFormHide,
        changeFormShowing,
        handleCardTitle,
        handleCardDescription,
        cardTitle,
        cardDescription,
        signOut
    }
}