import {PrintingManager} from './printing-manager';


describe('Test Printing Manager', () => {
  it('should print the documents in the order they were scheduled', () => {
    const printingManager = new PrintingManager();
    const mockPrint = vi.spyOn(printingManager, 'print');

    printingManager.schedule('Document 1');
    printingManager.schedule('Document 2');
    printingManager.schedule('Document 3');
    printingManager.run();

    expect(mockPrint.mock.calls[0][0]).toEqual('Document 1');
    expect(mockPrint.mock.calls[1][0]).toEqual('Document 2');
    expect(mockPrint.mock.calls[2][0]).toEqual('Document 3');
  })

})
