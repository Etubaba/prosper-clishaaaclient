const SkelTr = ({
  headers,
}: {
  headers: {
    title: string;
  }[];
}) => {
  return (
    <tr>
      {headers.map((_, i) => {
        return (
          <td key={i}>
            <p className="sk_bg p-[0.5rem] mr-1 min-h-[1.75rem] 2xl:min-h-[2.2rem] text-[12px] 2xl:text-[16px] bg-white rounded-[5px]">
              {""}
            </p>
          </td>
        );
      })}
    </tr>
  );
};

export default SkelTr;
