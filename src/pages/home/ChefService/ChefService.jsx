import chefService from '../../../assets/home/chef-service.jpg'

const ChefService = () => {
    return (
        <div>
            <div className='relative hidden lg:inline'>
            <img className='' src={chefService} alt="" />
            <div className='absolute bg-white rounded-lg opacity-90 z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2/3 py-16 w-4/6 px-10 text-center'>
                <h3 className='text-3xl mb-1'>Bistro Boss</h3>
                <p>Welcome to Bistro Boss, a charming and inviting restaurant that promises a delightful dining experience. Nestled in the heart of the city, our bistro offers a warm and friendly ambiance that sets the stage for a memorable culinary journey.</p>
            </div>
        </div>
            <div className='relative lg:hidden inline'>
            <img className='h-[260px]' src={chefService} alt="" />
            <div className='absolute rounded-lg opacity-90 bg-white top-1/2 z-10 py-4 w-9/12 h-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                <h3 className=''>Bistro Boss</h3>
                <p className='text-sm'>Welcome to Bistro Boss, a charming and inviting restaurant that promises a delightful dining experience. Nestled in the heart of the city, our bistro offers a warm and friendly ambiance that sets the stage for a memorable culinary journey.</p>
            </div>
        </div>
        </div>
    );
};

export default ChefService;