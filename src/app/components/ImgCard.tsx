'use client'
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import Image from 'next/image';

const ImgCard = ({ user }: any) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id: user.id })

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    return (
        <div
            style={style}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className='user'>
            <Image className='w-full object-cover' src={user.img} alt='stuff' />
            <ul className='flex gap-3 mt-5'>
                {
                    user.tags.map((item: any, i: any) => (
                        <li className=' bg-blue-100 px-3 py-1 rounded-2xl' key={i}>#{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ImgCard