import { mockFetchResponse } from '@/mock-data/mock-list';
import { fetchData } from './fetchData';

global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    // This is optional, I added it to stop the error showing when running tests but sometimes you 
    // might want to see that erro
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.clearAllMocks();
  });

  it('fetches data successfully and returns updated posts', async () => {
    const mockResponse = { posts: mockFetchResponse };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const result = await fetchData(1);

    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/posts?limit=20&skip=0');
    expect(result.error).toBeUndefined();
    expect(result.dataResponse).toHaveLength(mockFetchResponse.length);
    expect(result.dataResponse[0]).toHaveProperty('author');

    const firstPost = mockFetchResponse[0];
    const firstPostText = firstPost.body.length > 100 ? firstPost.body.slice(0, 100) + "..." : firstPost.body;
    expect(result.dataResponse[0].thisPostCappedText).toBe(firstPostText);

    const secondPost = mockFetchResponse[1];
    const secondPostText = secondPost.body.length > 100 ? secondPost.body.slice(0, 100) + "..." : secondPost.body;
    expect(result.dataResponse[1].thisPostCappedText).toBe(secondPostText);
  });

  it('handles fetch failure and returns an error message', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: false,
      status: 500,
    });

    const result = await fetchData(1);

    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/posts?limit=20&skip=0');
    expect(result.dataResponse).toBeUndefined();
    expect(result.error).toBe('HTTP error! Status: 500');
  });

  it('handles network errors gracefully', async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    const result = await fetchData(1);

    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/posts?limit=20&skip=0');
    expect(result.dataResponse).toBeUndefined();
    expect(result.error).toBe('Network error');
  });
});
