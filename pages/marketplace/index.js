
import { CourseList } from "@components/course"
import { useAccount } from "@components/hooks/web3/useAccount"
import { useNetwork } from "@components/hooks/web3/useNetwork"
import { BaseLayout } from "@components/layout"
import { WalletBar } from "@components/web3"
import { getAllCourses } from "@content/courses/fetcher"

export default function Market({ courses }) {
    const {account} = useAccount(); 
    const {network} = useNetwork();

    return (
        <>
            <div className="py-4">
                {network.data}
                <WalletBar 
                    address = {account.data}
                    network = {network.data}
                />
            </div>
            <CourseList
                courses={courses}
            />
        </>
    )

}

export function getStaticProps() {
    const { data } = getAllCourses()
    return {
        props: {
            courses: data
        }
    }
}

Market.Layout = BaseLayout;