import { BlogPosts } from 'app/components/posts'
import { SideCard } from 'app/components/sideCard'


export default function Page() {
  return (
    <section>
      <div className="flex">
        <div className="w-[70%]">
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Blog Posts
          </h1>
          <div className="my-2">
            <BlogPosts />
          </div>
        </div>
        <div className="w-[30%] p-2 rounded-lg border bg-gray-150 border-gray-175 dark:bg-[#273448] dark:border-[#323943]">
          <SideCard />
        </div>
      </div>
    </section>
  )
}
