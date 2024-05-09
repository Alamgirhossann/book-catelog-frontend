import { FormEvent, SetStateAction, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// import { Button } from './ui/button';
// import { Textarea } from './ui/textarea';
import { FiSend } from 'react-icons/fi';
import {
  useGetSingleBookQuery,
  usePostCommentMutation,
} from '@/redux/features/bookCatalog/bookApis';

interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const { data } = useGetSingleBookQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });
  console.log(data);
  const [postComment, { isLoading }] = usePostCommentMutation();

  console.log(isLoading);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const options = {
      id,
      data: { reviews: [...data.data.reviews, inputValue] },
    };

    postComment(options);
    setInputValue('');
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto mt-5">
      <form className="flex gap-5 items-center" onSubmit={handleSubmit}>
        <textarea
          className="min-h-[30px] border border-[#8d27ae] w-full rounded-md"
          style={{ outline: 'none' }}
          value={inputValue}
          placeholder="Write Your Comment"
          onChange={handleChange}
        />
        <button
          disabled={!inputValue}
          type="submit"
          className={`rounded-full h-10 w-10 p-2 text-[25px] ${
            !inputValue ? 'bg-[#8d27ae]/20' : 'bg-[#8d27ae]'
          } bg-[#8d27ae] text-white`}
        >
          <FiSend />
        </button>
      </form>
      <div className="mt-10">
        {data?.data?.reviews?.map((comment: string, index: number) => (
          <div key={index} className="flex gap-3 items-center mb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p>Name</p>
              <p>{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
