import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <div className='flex item-center justify-center h-full pt-15 p-20'>
            <SignUp afterSignOutUrl='/'/>

        </div>
    )
}