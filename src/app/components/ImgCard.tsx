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
            key={user.id}
            className='user'>
            {/* <h2>{user.id}</h2> */}
            <Image className='w-full h-full' src={user.img} alt='stuff' key={user.id} />
        </div>
    )
}

export default ImgCard