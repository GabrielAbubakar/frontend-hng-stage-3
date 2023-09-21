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
import { useState, useEffect } from 'react'
import { imgData } from '../components/data';
import ImgCard from '../components/ImgCard';
import { signOut } from 'next-auth/react'

const Gallery = () => {
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
    const [store, setStore] = useState(imgData)
    const [filteredStore, setFilteredStore] = useState(imgData)
    const [search, setSearch] = useState('')

    const onDragEnd = (event: any) => {
        const { active, over } = event

        if (active.id !== over.id) {
            setFilteredStore((items) => {
                const oldIndex = filteredStore.findIndex(user => user.id === active.id)
                const newIndex = filteredStore.findIndex(user => user.id === over.id)

                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    const handleSearch = (e: any) => {
        e.preventDefault()

        if (search == '' || search == 'all') {
            return setFilteredStore(store)
        } else {
            setFilteredStore(
                imgData.filter((item) => item.tags.includes(search))
            )
        }

        setSearch('')
    }

    if (filteredStore.length == 0) {
        return (
            <main className="max-w-container-lg mx-auto px-6 py-20">
                <nav className='flex justify-between'>
                    <h1 className="font-bold text-black text-4xl ">Image Gallery</h1>

                    <form
                        onSubmit={(e) => handleSearch(e)}
                    >
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            className='border border-red-400 px-5 py-1'
                            value={search}
                            type="text"
                            placeholder='Search tags'
                        />
                    </form>
                </nav>

                <div className=' mt-5'>
                    <p>No results with that tag were found. Search another e.g. &apos;all&apos;</p>
                </div>
            </main>
        )
    }


    return (
        <main className="max-w-container-lg mx-auto px-6 py-20">
            <nav className='flex flex-col gap-4 lg:flex-row justify-between'>
                <h1 className="font-bold text-black text-4xl ">Image Gallery</h1>

                <button onClick={() => signOut()}>Log out</button>
                <form
                    onSubmit={(e) => handleSearch(e)}
                >
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className='border border-red-400 px-5 py-1'
                        value={search}
                        type="text"
                        placeholder='Search tags'
                    />
                </form>
            </nav>

            <div className="max-w-container-lg mx-auto py-20">

                <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14'>
                    <DndContext
                        sensors={sensors}
                        collisionDetection={rectIntersection} onDragEnd={onDragEnd}>
                        <SortableContext items={filteredStore} strategy={rectSortingStrategy}>
                            {
                                filteredStore.map((item, i) => (
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

export default Gallery;