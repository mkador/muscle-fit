import React from 'react';

const QandAns = () => {
    return (
        <div>
            <h3 className='text-center font-monospace mt-3'>Questions And Answers </h3>
            <div>
                <h3 className='font-monospace text-danger'>Question-1: How does react work ?</h3>
                <p className='shadow p-4 mb-5 bg-body rounded '>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                 A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state </p>
            </div>
            <div>
                <h3 className='font-monospace text-danger'>Question-1: Difference between props and state in react ?</h3>
                <h4 className='font-monospace text-success'>
                    Props:
                </h4>
                <p className='shadow p-4 mb-5 bg-body rounded '>
                    1-The Data is passed from one component to another. <br />
                    2-It is Immutable (cannot be modified).<br />
                    3-Props can be used with state and functional components.<br />
                    4-Props are read-only.<br />
                </p>
                <h4 className='font-monospace text-success'>
                    useState:
                </h4>
                <p className='shadow p-4 mb-5 bg-body rounded'>
                    1-The Data is passed within the component only.<br />
                    2-It is Mutable ( can be modified).<br />
                    3-State can be used only with the state components/class component<br />
                    4-State is both read and write..<br />
                </p>
            </div>
            <div>
                <h3 className='font-monospace text-danger'>Question-1: What useEffect can do ?</h3>
                <p className='shadow p-4 mb-5 bg-body rounded '>
                The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: <br />
                    1- fetching data.<br />
                    2-directly updating the DOM, and.<br />
                    3-timers.<br />
                    useEffect accepts two arguments. The second argument is optional </p>
                  
            </div>
        </div>
    );
};

export default QandAns;