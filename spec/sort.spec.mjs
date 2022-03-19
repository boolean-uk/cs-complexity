import { bubbleSort } from '../src/bubbleSort.mjs'
import { bucketSort } from '../src/bucketSort.mjs'
import { countingSort } from '../src/countingSort.mjs'
import { insertionSort } from '../src/insertionSort.mjs'
import { mergeSort } from '../src/mergeSort.mjs'
import { quickSort } from '../src/quickSort.mjs'
import { selectionSort } from '../src/selectionSort.mjs'

import { unsortedData, sortedData } from './data.mjs'

describe('bubbleSort', function() {
    it('correctly sorts', function() {
        const sorted = bubbleSort(unsortedData);
        expect(sorted).toEqual(sortedData);
    })
})

describe('selectionSort', function() {
    it('correctly sorts', function() {
        const sorted = selectionSort(unsortedData);
        expect(sorted).toEqual(sortedData);
    })
})

describe('insertionSort', function() {
    it('correctly sorts', function() {
        const sorted = insertionSort(unsortedData);
        expect(sorted).toEqual(sortedData);
    })
})

describe('countingSort', function() {
    it('correctly sorts', function() {
        const sorted = countingSort(unsortedData);
        expect(sorted).toEqual(sortedData);
    })
})

describe('mergeSort', function() {
    it('correctly sorts', function() {
        const sorted = mergeSort(unsortedData);
        expect(sorted).toEqual(sortedData);
    })
})

describe('quickSort', function() {
    it('correctly sorts', function() {
        const sorted = quickSort(unsortedData);
        expect(sorted).toEqual(sortedData);
    })
})

describe('bucketSort', function() {
    it('correctly sorts', function() {
        const sorted = bucketSort(unsortedData);
        expect(sorted).toEqual(sortedData);
    })
})