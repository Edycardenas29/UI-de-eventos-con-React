const Card = ({ serviceName, serviceType, price, imageUrl }) => {
    return (
        <div className='bg-white cursor-pointer w-64 h-72 rounded-lg shadow-lg overflow-hidden'>
            <figure className='relative h-4/5 overflow-hidden rounded-t-lg'>
                <img className='w-full h-full object-cover' src={imageUrl} alt='Imagen del servicio' />
                <figcaption className='absolute bottom-0 left-0 bg-white/60 text-black text-xs m-2 px-3 py-0.5 rounded-lg'>{serviceName}</figcaption>
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'></div>
            </figure>
            <div className='p-4'>
                <p className='text-sm font-light'>{serviceType}</p>
                <p className='text-lg font-medium text-gray-800'>${price}</p>
            </div>
        </div>
    );
}
export default Card 