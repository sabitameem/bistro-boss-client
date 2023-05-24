import chefService from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div className='relative'>
            <img className='' src={chefService} alt="" />
            <div className='absolute bg-white  z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 py-16 w-4/6 px-10 text-center'>
                <h3 className='text-3xl mb-1'>Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto  ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ChefService;