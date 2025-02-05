import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";


export const FinancialRecordsContext = createContext(undefined);

export const FinancialRecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const { user } = useUser();

  const fetchRecords = async () => {
    const response = await fetch(
      `http://localhost:8080/Fms/getuserbyid/${user.id}`
    );

    if (response.ok) {
      const records = await response.json();
      console.log(records);
      setRecords(records);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [user]);

  const addRecord = async (record) => {
    const response = await fetch("http://localhost:8080/Fms", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (err) {
      console.error("Error adding record:", err);
    }
  };

  const updateRecord = async (id, newRecord) => {
    const response = await fetch(
      `http://localhost:8080/Fms/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(newRecord),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      if (response.ok) {
        const updatedRecord = await response.json();
        setRecords((prev) =>
          prev.map((record) => {
            if (record._id === id) {
              return updatedRecord;
            } else {
              return record;
            }
          })
        );
      }
    } catch (err) {
      console.error("Error updating record:", err);
    }
  };

  const deleteRecord = async (id) => {
    try {
      // Send the DELETE request
      const response = await fetch(`http://localhost:8080/Fms/${id}`, {
        method: "DELETE",
      });

      // Check if the response is okay
      if (!response.ok) {
        // Handle the case where the response is not okay
        const errorData = await response.json();
        console.error("Error deleting record:", errorData.message);
        return; // Exit the function early
      }

      // If the response is okay, parse the response
      const deletedRecord = await response.json();

      // Update the state to remove the deleted record
      setRecords((prev) =>
        prev.filter((record) => record._id !== deletedRecord._id)
      );
    } catch (err) {
      // Handle network errors or unexpected issues
      console.error("Error deleting record:", err.message);
    }
  };


  return (
    <FinancialRecordsContext.Provider
      value={{ records, addRecord, updateRecord, deleteRecord }}
    >
      {children}
    </FinancialRecordsContext.Provider>
  );
};

export const useFinancialRecords = () => {
  const context = useContext(FinancialRecordsContext);

  if (!context) {
    throw new Error(
      "useFinancialRecords must be used within a FinancialRecordsProvider"
    );
  }

  return context;
};
