import React, { useEffect, useState } from "react";

export default function AssetInventory() {
  const [softwareList, setSoftwareList] = useState([]);
  const [osName, setOsName] = useState("");
  const [totalRam, setTotalRam] = useState(0);
  console.log("totalRam", totalRam);

  const [cpuInfo, setCpuInfo] = useState("");
  const [storageInfo, setStorageInfo] = useState([]);
  const getInfo = () => {
    if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1) {
      console.log("OS is Windows 10");
    }

    if (window.navigator.userAgent.indexOf("Windows NT 6.3") != -1) {
      console.log("OS is Windows 8.1");
    }

    if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) {
      console.log("OS is Windows 8");
    }

    if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) {
      console.log("OS is Windows 7");
    }

    if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) {
      console.log("OS is Windows Vista");
    }

    if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) {
      console.log("OS is Windows XP");
    }

    if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) {
      console.log("OS is Windows 2000");
    }

    if (window.navigator.userAgent.indexOf("Mac") != -1) {
      console.log("OS is Mac/iOS");
    }

    if (window.navigator.userAgent.indexOf("X11") != -1) {
      console.log("OS is UNIX");
    }

    if (window.navigator.userAgent.indexOf("Linux") != -1) {
      console.log("OS is Linux");
    }
  };
  useEffect(() => {
    getInfo();
    const fetchClientInfo = async () => {
      // Fetch the installed software
      const response = await fetch("/api/software");
      const softwareData = await response.json();
      setSoftwareList(softwareData);

      // Get the operating system name
      const osName = window.navigator.platform;
      setOsName(osName);

      // Get the total RAM
      const totalRamBytes = window.navigator.deviceMemory || 0;
      const totalRamGb = totalRamBytes / 1024 ** 3;
      console.log(`This device has at least ${totalRamGb}GiB of RAM.`);

      const memory = navigator.deviceMemory;
      console.log(`This device has at least ${memory}GiB of RAM.`);

      setTotalRam(memory);

      // Get the CPU information
      const cpuInfo = window.navigator.hardwareConcurrency || "";
      setCpuInfo(cpuInfo);

      // Get the storage information
      const storageInfo = [];
      const drives =
        window.navigator.getStorageInfo &&
        (await window.navigator.getStorageInfo());
      if (drives && drives.length > 0) {
        for (const drive of drives) {
          const driveInfo = {
            Drive: drive.label || drive.name || "",
            Size: drive.capacity || 0,
            FreeSpace: drive.remainingSpace || 0,
          };
          storageInfo.push(driveInfo);
        }
      }
      setStorageInfo(storageInfo);
    };

    fetchClientInfo();
  }, []);

  // Function to save client information to a CSV file (similar to the save_to_csv function in the Python script)
  const saveToCsv = () => {
    // Construct the CSV content
    let csvContent = "Name,Version\n";
    for (const software of softwareList) {
      csvContent += `${software[0]},${software[1]}\n`;
    }
    csvContent += "\nOperating System:," + osName + "\n";
    csvContent += "Total RAM (GB):," + totalRam + "\n";
    csvContent += "CPU:," + cpuInfo + "\n";
    csvContent += "\nDrive,Size (GB),Free Space (GB)\n";
    for (const drive of storageInfo) {
      csvContent += `${drive.Drive},${drive.Size},${drive.FreeSpace}\n`;
    }

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: "text/csv" });

    // Create a temporary <a> element and set its attributes for downloading the file
    const anchorElement = document.createElement("a");
    anchorElement.href = URL.createObjectURL(blob);
    anchorElement.download = "client_info.csv";

    // Programmatically click the anchor element to trigger the file download
    anchorElement.click();
  };

  // Render the client information and a button to save it to a CSV file
  return (
    <div>
      <h1>Client Information</h1>
      <h2>Installed Software</h2>
      <ul>
        {softwareList.map((software, index) => (
          <li key={index}>
            {software[0]} - {software[1]}
          </li>
        ))}
      </ul>
      <h2>Operating System: {osName}</h2>
      <h2>Total RAM (GB): {totalRam}</h2>
      <h2>CPU: {cpuInfo}</h2>
      <h2>Storage Information</h2>
      <table>
        <thead>
          <tr>
            <th>Drive</th>
            <th>Size (GB)</th>
            <th>Free Space (GB)</th>
          </tr>
        </thead>
        <tbody>
          {storageInfo.map((drive, index) => (
            <tr key={index}>
              <td>{drive.Drive}</td>
              <td>{drive.Size}</td>
              <td>{drive.FreeSpace}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={saveToCsv}>Save to CSV</button>
    </div>
  );
}
