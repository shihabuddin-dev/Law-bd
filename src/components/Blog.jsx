import React from 'react';

const Blog = ({ blog }) => {
    const { date, question, answer } = blog || {}
    return (
        <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-4 cursor-pointer">
            <div className="flex  justify-between gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="p-8 mt-4 md:mt-0 bg-white border border-[#0EA106] rounded-2xl shadow-sm duration-1000 transform hover:-translate-y-2">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <a
                            href="/"
                            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            aria-label="Category"
                        >
                            Publish Date:
                        </a>{' '}
                        <span className="text-gray-600">{date}</span>
                    </p>
                    <p
                        title="Jingle Bells"
                        className="inline-block mb-3 text-2xl font-bold text-black transition-colors duration-200 hover:text-deep-purple-accent-400 leading-8"
                    >
                        {question}
                    </p>
                    <p className="mb-5 text-gray-700">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Blog;