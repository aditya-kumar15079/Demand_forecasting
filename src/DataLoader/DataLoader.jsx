import Papa from 'papaparse';
import csvData from './merge_data.csv?raw';

// This constant should be defined elsewhere (e.g., via a build env variable).
// An empty string means no backend API is used.
const useBackendAPI = false;
// Local CSV file path (not used when importing raw data)
/**
 * Fetches CSV data from the appropriate source (local file or backend API),
 * parses it using Papa Parse, and returns a promise that resolves with an object
 * containing the extracted columns and rows.
 */
export function fetchCSVData() {
  if (!useBackendAPI) {
    // If not using backend API, parse the CSV data from the imported raw text.
    const result = Papa.parse(csvData, { header: true, skipEmptyLines: true });
    const columns = result.meta.fields || [];

    console.log("Parsed CSV Data:", result.data);
    console.log("Detected Columns:", columns);

    // Return a resolved promise with the parsed data (simulate async behavior).
    return Promise.resolve({ columns, data: result.data });
  } else {
    // If using the backend API, fetch the CSV from the API endpoint.
    const csvURL = "https://api.example.com/data"; // Replace with your backend API URL
    return fetch(csvURL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok: " + response.statusText);
        }
        return response.text();
      })
      .then(csvText => {
        console.log("CSV Text from API:", csvText);
        const result = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const columns = result.meta.fields || [];
  
        console.log("Parsed CSV Data:", result.data);
        console.log("Detected Columns:", columns);
  
        return { columns, data: result.data };
      })
      .catch(error => {
        console.error("Error fetching CSV data:", error);
        throw error;
      });
  }
}
