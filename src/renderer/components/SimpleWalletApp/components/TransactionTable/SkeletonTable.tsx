import "./index.css";

import React from "react";
import Skeleton from "react-loading-skeleton";

interface TransactionTablePropType {
	className?: string;
}

const SkeletonTransactionTable = ({ className }: TransactionTablePropType) => (
	<>
		<div className={`${className} flex`}>
			<table className="m-auto hidden lg:block">
				<tr className="table-header-font">
					<th className="text-left py-16px px-20px border-2 border-gray-200">
						txid
					</th>
					<th className="text-left py-16px px-20px border-2 border-gray-200">
						sender
					</th>
					<th className="text-left py-16px px-20px border-2 border-gray-200">
						recipient
					</th>
					<th className="table-cell lg:hidden xxl:table-cell text-center py-16px px-20px border-2 border-gray-200">
						timestamp
					</th>
					<th className="text-right py-16px px-20px border-2 border-gray-200">
						amount
					</th>
					<th className="table-cell lg:hidden xl:table-cell text-right py-16px px-20px border-2 border-gray-200">
						fee
					</th>
				</tr>
				{[0, 1, 2, 3, 4, 5].map((item) => (
					<tr
						className="table-black-font border-gray-200 border-b-2"
						key={item}
					>
						<td className="relative lg:w-56px xl:w-150px py-16px px-20px overflow-hidden overflow-ellipsis">
							<Skeleton />
						</td>
						<td className="relative w-200px py-16px px-20px overflow-hidden overflow-ellipsis">
							<Skeleton />
							<div className="absolute right-0 top-0 w-2px h-full py-16px ">
								<div className="bg-gray-200 w-full h-full" />
							</div>
						</td>
						<td className="relative w-200px py-16px px-20px overflow-hidden overflow-ellipsis">
							<Skeleton />
							<div className="absolute right-0 top-0 w-2px h-full py-16px ">
								<div className="bg-gray-200 w-full h-full" />
							</div>
						</td>
						<td className="relative table-cell lg:hidden xxl:table-cell w-100px py-16px px-20px">
							<Skeleton />
							<div className="absolute right-0 top-0 w-2px h-full py-16px ">
								<div className="bg-gray-200 w-full h-full" />
							</div>
						</td>
						<td className="relative w-250px xl:w-250px xxl:w-350px py-16px px-20px">
							<Skeleton />
							<div className="absolute right-0 top-0 w-2px h-full py-16px ">
								<div className="bg-gray-200 w-full h-full" />
							</div>
						</td>
						<td className="relative table-cell lg:hidden xl:table-cell w-200px py-16px px-20px">
							<Skeleton />
						</td>
					</tr>
				))}
			</table>
			<div className="block lg:hidden w-full h-full table-black-font">
				{[0, 1, 2, 3, 4, 5].map((item) => (
					<div className="flex flex-col mx-31px" key={item}>
						<div className="my-10px">
							<div className="float-left text-font-color2">
								Txid
							</div>
							<div className="float-right text-font-color1">
								<Skeleton width={100} height={25} />
							</div>
						</div>
						<div className="my-10px">
							<div className="float-left text-font-color2">
								Sender
							</div>
							<div className="hidden sm:hidden md:block float-right text-font-color1">
								<Skeleton width={230} height={25} />
							</div>
							<div className="block sm:block md:hidden float-right text-font-color1">
								<Skeleton width={130} height={25} />
							</div>
						</div>
						<div className="my-10px">
							<div className="float-left text-font-color2">
								Recipient
							</div>
							<div className="hidden sm:hidden md:block float-right text-font-color1">
								<Skeleton width={230} height={25} />
							</div>
							<div className="block sm:block md:hidden float-right text-font-color1">
								<Skeleton width={130} height={25} />
							</div>
						</div>
						<div className="my-16px">
							<div className="float-left text-font-color2">
								Timestamp
							</div>
							<div className="float-right text-font-color1">
								<Skeleton width={100} height={25} />
							</div>
						</div>
						<div className="my-16px">
							<div className="float-left text-font-color2">
								Amount
							</div>
							<div className="float-right text-font-color1">
								<Skeleton width={150} height={25} />
							</div>
						</div>
						<div className="my-16px">
							<div className="float-left text-font-color2">
								Fee
							</div>
							<div className="float-right text-font-color1">
								<Skeleton width={100} height={25} />
							</div>
						</div>
						<div className="w-full h-1px bg-font-color2 my-31px" />
					</div>
				))}
			</div>
		</div>
	</>
);

export default SkeletonTransactionTable;
