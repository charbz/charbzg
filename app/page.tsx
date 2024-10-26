import { BlogPosts } from 'app/components/posts'
import { SideCard } from 'app/components/sideCard'


export default function Page() {
  return (
    <section>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[70%] main-content">
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Blog Posts
          </h1>
          <div className="my-2">
            <BlogPosts />
          </div>
        </div>
        <div className="w-full md:w-[30%] sidebar p-2 rounded-lg border bg-gray-150 border-gray-175 dark:bg-[#273448] dark:border-[#323943] mt-4 md:mt-0">
          <SideCard />
        </div>
      </div>
    </section>
  )
}
