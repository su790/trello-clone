import React from "react";

type Item = {
    id: string
}
export const findItemByIndex = <TItem extends Item>(items: TItem[], id: string) => {
    return items.findIndex((item: Item) => item.id === id)
}