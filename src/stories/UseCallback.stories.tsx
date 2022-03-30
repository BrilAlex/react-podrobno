import {Story} from "@storybook/react";
import React, {useCallback, useMemo, useState} from "react";

export default {
  title: "Hooks/useCallback",
}

type BooksPropsType = {
  addBook: () => void
};

const Books = (props: BooksPropsType) => {
  console.log("Books rendering");
  return (
    <div>
      <button onClick={props.addBook}>Add book</button>
    </div>
  );
};

const BooksContainer = React.memo(Books);

export const UseCallbackAndUseMemoExample: Story = () => {
  console.log("LikeUseCallbackExample rendering");

  const [count, setCount] = useState<number>(0);
  const [books, setBooks] = useState<string[]>([
    "HTML", "CSS", "JS", "React",
  ]);

  const addBook = useMemo(() => {
    return () => {
      console.log(books);
      const newBook = "Angular";
      setBooks([...books, newBook]);
    };
  }, [books]);

  const addBookCallback = useCallback(() => {
    console.log(books);
    const newBook = "Angular";
    setBooks([...books, newBook]);
  }, [books]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <div>{count}</div>
      <BooksContainer addBook={addBook}/>
      <BooksContainer addBook={addBookCallback}/>
    </div>
  );
};