let invoiceLinesCount = 0;

function addInvoiceLine() {
    invoiceLinesCount++;

    const invoiceLinesDiv = document.getElementById('invoiceLines');
    
    const lineDiv = document.createElement('div');
    lineDiv.innerHTML = `
        <div>
            <label for="description${invoiceLinesCount}">Description:</label>
            <input type="text" id="description${invoiceLinesCount}">
        </div>
        <div>
            <label for="amount${invoiceLinesCount}">Amount:</label>
            <input type="number" id="amount${invoiceLinesCount}" step="0.01">
        </div>
    `;

    invoiceLinesDiv.appendChild(lineDiv);
}

function generateInvoice() {
    const clientName = document.getElementById('clientName').value;
    const invoiceDate = document.getElementById('invoiceDate').value;

    let invoiceLines = [];

    for (let i = 1; i <= invoiceLinesCount; i++) {
        const description = document.getElementById(`description${i}`).value;
        const amount = document.getElementById(`amount${i}`).value;

        invoiceLines.push({
            description,
            amount
        });
    }

    const invoiceContent = `
        <h1>Invoice</h1>
        <p><strong>Client Name:</strong> ${clientName}</p>
        <p><strong>Invoice Date:</strong> ${invoiceDate}</p>
        
        <h2>Invoice Lines</h2>
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                ${invoiceLines.map(line => `
                    <tr>
                        <td>${line.description}</td>
                        <td>${line.amount}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    const invoiceWindow = window.open('', '_blank');
    invoiceWindow.document.open();
    invoiceWindow.document.write(invoiceContent);
    invoiceWindow.document.close();
}
