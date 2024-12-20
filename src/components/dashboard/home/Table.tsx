"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Application {
  id: string;
  jobTitle: string;
  companyName: string;
  status: string;
  dateApplied: string;
}

interface FetchResponse {
  items: Application[];
  totalPages: number;
}

const Table: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<
    Application[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const fetchApplications = async (page: number = 1) => {
    setIsLoading(true);
    try {
      const response = await axios.get<FetchResponse>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/applications?page=${page}&limit=10`,
      );
      setApplications(response.data.items);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      toast.error("Error fetching data!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications(currentPage);
  }, [currentPage]);

  useEffect(() => {
    applyFilters();
  }, [applications, statusFilter, sortOrder]);

  const applyFilters = () => {
    let filtered = [...applications];

    if (statusFilter !== "All") {
      filtered = filtered.filter((app) => app.status === statusFilter);
    }

    filtered.sort((a, b) => {
      const dateA = new Date(a.dateApplied).getTime();
      const dateB = new Date(b.dateApplied).getTime();
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setFilteredApplications(filtered);
  };

  const handlePageChange = (direction: "next" | "prev") => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex justify-between items-center py-4">
        <select
          className="px-4 py-2 border rounded text-gray-700"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="rejected">Rejected</option>
        </select>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
          onClick={() =>
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"))
          }
        >
          Sort by Date {sortOrder === "asc" ? "⬆" : "⬇"}
        </button>
      </div>

      <div className="h-[20rem] overflow-scroll">
        {isLoading ? (
          <div className="text-center py-5">Loading...</div>
        ) : (
          <>
            <table className="w-full text-xs bg-white border-collapse border-t-2 border-[#e6e6e6]">
              <thead>
                <tr className="text-left">
                  <th className="pr-4 text-center py-1 leading-6 text-[#4D4D4D]">
                    S/N
                  </th>
                  <th className="py-3">Job Title</th>
                  <th>Company Name</th>
                  <th>Status</th>
                  <th className="py-3">Date Applied</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-t-2 border-[#e6e6e6] text-[#4D4D4D] w-full hover:bg-[#737373] hover:bg-opacity-10 cursor-pointer"
                  >
                    <td className="py-3 text-center">
                      {(currentPage - 1) * 10 + index + 1}
                    </td>
                    <td className="py-3">{item?.jobTitle}</td>
                    <td className="py-3">{item?.companyName}</td>
                    <td className="py-3">{item?.status}</td>
                    <td className="py-3">{item?.dateApplied}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredApplications.length === 0 && (
              <div className="text-center py-5">No data available</div>
            )}
          </>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center py-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
          disabled={currentPage === 1}
          onClick={() => handlePageChange("prev")}
        >
          Previous
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
