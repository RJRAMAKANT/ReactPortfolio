import  {Experiencedata, College } from "../Data/experienceData";

function Experience(){
    return <div className="pt-10  mt-10">
        <div className="text-center font-bold text-5xl mb-10 text-Brightsun-400">Experience</div>
         
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 px-5">
            <div>
            {
    Experiencedata.map((exp,index)=>

<div class="">
<div class='flex flex-col gap-5 items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full  mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>

        <div className="flex flex-col mb-5 "><div class='w-full flex items-center  justify-between'>
            <div class='flex items-center justify-center px-2 md:px-6'>
                <img class='w-16 h-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block' src={`${exp.image}.png`}alt="" />
                <div class='text-left '>
                    <h4 class='text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase'><span class='text-red-500'>{exp.Name}</span></h4>
                    <h4 class='text-sm md:text-base font-medium dark:text-gray-200'>{exp.role}</h4>
                </div>
            </div>
            <div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
                <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>{exp.from} - {exp.to} </p>
                <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>{exp.Address}</p>
            </div>
        </div><div class='text-left p-2'>
                <p class='text-sm lg:text-base text-gray-600 dark:text-gray-400 pb-4'>{exp.Responsibility}</p>
            
            </div></div>
    

</div>
</div>
    )
}

</div>


<div>
{
    College.map((college,index)=>
<div class="mt-2">
{/* <div class='flex flex-col items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full  mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
<div class='w-full flex items-center justify-between'>
<div class='flex items-center justify-center px-2 md:px-6'>
    <img class='w-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block' src='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?size=626&ext=jpg' alt="" />
    <div class='text-left '>
        <h4 class='text-lg md:text-2xl lg:text-3xl ease-in-out duration-1000 uppercase'><span class='text-red-500'>Code</span>101</h4>
        <h4 class='text-sm md:text-base font-medium dark:text-gray-200'>Software Engineer</h4>
    </div>
</div>
<div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
    <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>July 2022 - Present </p>
    <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>Techtopia, Digital Realm</p>
</div>
</div>
<div class='text-left p-2'>
<p class='text-sm lg:text-base text-gray-600 dark:text-gray-400 pb-4'>I am a Software Engineer currently employed at Code101, where I work as a full-stack developer as part of the Web Application Development team. Together, we utilize ReactJS and NodeJS to create software solutions that provide users with a seamless and enjoyable experience.</p>
<h4 class='text-base text-green-400 font-semibold'>Key Responsibilities</h4>
<ul class='text-sm list-disc ml-6'>
    <li>Develop and maintain the NodeJS server and backend of the Web Application team's software solutions.</li>
    <li>Collaborate with the full-stack developer to contribute to the application's frontend development.</li>
    <li>Write reusable, flexible, and high-quality code to ensure the reliability and longevity of our products.</li>
</ul>
</div>
</div> */}



        <div class='flex flex-col gap-5 items-center justify-between bg-white dark:bg-gray-800 shadow-md shadow-gray-300 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 w-full  mx-auto h-auto rounded-xl transition-all ease-in-out duration-500 mb-4 py-2 px-2 md:px-4'>
<div class='w-full flex items-center justify-between'>
<div class='flex items-center justify-center px-2 md:px-6'>
    <img class='w-16 h-16 hidden rounded-full ring-2 ring-green-600 shadow-lg shadow-green-600 m-2 md:block' src={`${college.image}.png`} alt="" />
    <div class='text-left '>
        <h4 class='text-lg md:text-2xl lg:text-xl w-full ease-in-out duration-1000 uppercase'><span class='text-red-500'>{college.Institute}</span></h4>
        <h4 class='text-sm md:text-base font-medium dark:text-gray-200'>{college.Course}</h4>
    </div>
</div>
<div class='text-sm md:text-base text-right p-2 gap-4 ease-in-out duration-500'>
    <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>{college.from} - {college.to} </p>
    <p class='text-sm md:text-base text-gray-800 dark:text-gray-200'>{college.Address}</p>
</div>
</div>

</div>
    

</div>
    )
}

</div>
            </div>


        </div>
}
export default Experience;