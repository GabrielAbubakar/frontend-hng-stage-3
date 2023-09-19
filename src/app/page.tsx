'use client'
import Image from 'next/image';
import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { imgData } from './components/data';

const Home = () => {


    const data = [
        {
            id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
            name: "Walmart",
            items: [
                { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk" },
                { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter" },
            ],
            tint: 1,
        },
        {
            id: "487f68b4-1746-438c-920e-d67b7df46247",
            name: "Indigo",
            items: [
                {
                    id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
                    name: "Designing Data Intensive Applications",
                },
                { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits" },
            ],
            tint: 2,
        },
        {
            id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
            name: "Lowes",
            items: [
                { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench" },
                { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer" },
            ],
            tint: 3,
        },
    ];

    const [store, setStore] = useState(imgData)

    const handleDragnDrop = (results: any) => {

        console.log(results);

        const { source, destination, type } = results

        if (!results) return

        if (source.droppableId === destination.droppableId && source.index === destination.index) {
            return
        }

        if (type === 'group') {
            const reorderedStores = [...store]

            const sourceIndex = source.index
            const destinationIndex = destination.index

            const [removedStore] = reorderedStores.splice(sourceIndex, 1)
            reorderedStores.splice(destinationIndex, 0, removedStore)


            return setStore(reorderedStores)
        }

    }


    return (
        <main>
            <div className="max-w-container-lg mx-auto px-6 xl:px-0 py-20">
                <h1 className="font-bold text-black text-2xl mb-10">Image Gallery</h1>

                {/* <div className='grid grid-cols-3 gap-14'>
                    {
                        store.map((item, i) => (
                            <Image className='w-full h-full' src={item.img} alt='stuff' key={i} />
                        ))
                    }
                </div> */}

                {/* <DragDropContext onDragEnd={handleDragnDrop}>
                    <Droppable droppableId='ROOT' type='group'>
                        {(provided) => (
                            <div
                                className='grid grid-cols-3 gap-14'
                                {...provided.droppableProps}
                                ref={provided.innerRef}>
                                {store.map((item, i) => (
                                    <Draggable draggableId={item.id.toString()} key={item.id} index={i}>
                                        {(provided) => (
                                            <span
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                                ref={provided.innerRef}>
                                                <Image className='w-full h-full' src={item.img} alt='stuff' />
                                                <h3>{item.id}</h3>
                                            </span>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext> */}
            </div>
        </main >
    )
}

export default Home