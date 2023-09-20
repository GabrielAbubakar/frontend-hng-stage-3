'use client'
import {
    DndContext,
    DragOverlay,
    rectIntersection,
    // closestCenter,
    MouseSensor,
    TouchSensor,
    // DragOverlay,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, rectSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react'
import { imgData } from './components/data';
import ImgCard from './components/ImgCard';

const Home = () => {
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
    const [store, setStore] = useState(imgData)

    const onDragEnd = (event: any) => {
        const { active, over } = event

        if (active.id !== over.id) {
            setStore((items) => {
                const oldIndex = store.findIndex(user => user.id === active.id)
                const newIndex = store.findIndex(user => user.id === over.id)

                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }


    return (
        <main>
            <div className="max-w-container-lg mx-auto px-6 xl:px-0 py-20">
                <h1 className="font-bold text-black text-2xl mb-10">Image Gallery</h1>

                <div className='grid grid-cols-3 gap-14'>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={rectIntersection} onDragEnd={onDragEnd}>
                        <SortableContext items={store} strategy={rectSortingStrategy}>
                            {
                                store.map((item, i) => (
                                    <ImgCard key={item.id} user={item} />
                                ))
                            }
                        </SortableContext>
                    </DndContext>
                </div>
            </div>
        </main >
    )
}

export default Home