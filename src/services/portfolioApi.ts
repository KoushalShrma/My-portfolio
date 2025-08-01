const API_BASE_URL = 'http://localhost:8080/api';

export interface PortfolioInfo {
  id: number;
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

class PortfolioApiService {
  
  async getPortfolioInfo(): Promise<PortfolioInfo> {
    try {
      const response = await fetch(`${API_BASE_URL}/portfolio/info`);
      const apiResponse: ApiResponse<PortfolioInfo> = await response.json();
      
      if (apiResponse.success) {
        return apiResponse.data;
      } else {
        throw new Error(apiResponse.message);
      }
    } catch (error) {
      console.error('Error fetching portfolio info:', error);
      // Return default data if API fails
      return this.getDefaultPortfolioInfo();
    }
  }

  async submitContact(contactRequest: ContactRequest): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactRequest),
      });

      const apiResponse: ApiResponse<any> = await response.json();
      
      if (!apiResponse.success) {
        throw new Error(apiResponse.message);
      }
    } catch (error) {
      console.error('Error submitting contact:', error);
      throw error;
    }
  }

  async checkHealth(): Promise<string> {
    try {
      const response = await fetch(`${API_BASE_URL}/portfolio/health`);
      const apiResponse: ApiResponse<string> = await response.json();
      
      if (apiResponse.success) {
        return apiResponse.data;
      } else {
        throw new Error(apiResponse.message);
      }
    } catch (error) {
      console.error('Error checking health:', error);
      return 'Frontend running (Backend unavailable)';
    }
  }

  private getDefaultPortfolioInfo(): PortfolioInfo {
    return {
      id: 1,
      name: 'Koushal Sharma',
      title: 'The Developer',
      description: 'Building intelligent backend systems with Java & Spring Boot',
      location: 'Indore, IN',
      email: 'koushalshrma@gmail.com',
      phone: '(+91) 810-913-3203',
      linkedinUrl: 'https://www.linkedin.com/in/koushalshrma',
      githubUrl: 'https://github.com/koushalshrma'
    };
  }
}

export const portfolioApi = new PortfolioApiService();