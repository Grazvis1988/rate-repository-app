import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
	describe('RepositoryListContainer', () => {
		it('renders repository information correctly', () => {
			const repositories = {
				totalCount: 8,
				pageInfo: {
					hasNextPage: true,
					endCursor:
					'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
					startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
				},
				edges: [
					{
						node: {
							id: 'jaredpalmer.formik',
							fullName: 'jaredpalmer/formik',
							description: 'Build forms in React, without the tears',
							language: 'TypeScript',
							forksCount: 1619,
							stargazersCount: 21856,
							ratingAverage: 88,
							reviewCount: 3,
							ownerAvatarUrl:
							'https://avatars2.githubusercontent.com/u/4060187?v=4',
						},
						cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
					},
					{
						node: {
							id: 'async-library.react-async',
							fullName: 'async-library/react-async',
							description: 'Flexible promise-based React data loader',
							language: 'JavaScript',
							forksCount: 69,
							stargazersCount: 1760,
							ratingAverage: 72,
							reviewCount: 3,
							ownerAvatarUrl:
							'https://avatars1.githubusercontent.com/u/54310907?v=4',
						},
						cursor:
						'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
					},
				],
			};

			

			const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories}/>);

			const repositoryItems = getAllByTestId('repositoryItem');
            const languageItems = getAllByTestId('languageInfo');
            const countSection = getAllByTestId('CountsSection');
            const starCounts = getAllByTestId('Stars');
            const forkCounts = getAllByTestId("Forks");
            const reviewsCounts = getAllByTestId("Reviews");
            const ratingCounts = getAllByTestId("Rating");


			const [firstRepositoryItem, secondRepositoryItem] = repositoryItems;
            const [firstLanguageItem, secondLanguageItem] = languageItems;

			expect(firstRepositoryItem).toHaveTextContent('Build forms in React, without the tears');
			expect(secondRepositoryItem).toHaveTextContent('Flexible promise-based React data loader');


            countSection.forEach(section => {
                expect(section).toBeDefined();
            })

            starCounts.forEach((count, idx) => {
                expect(count).toBeDefined();
                expect(count).toHaveTextContent("Stars");
                expect(count).toHaveTextContent( idx === 0 ? "21.9k" : "1.8");
            })

            forkCounts.forEach((count, idx) => {
                expect(count).toBeDefined();
                expect(count).toHaveTextContent("Forks");
                expect(count).toHaveTextContent( idx === 0 ? "1.6k" : "69");
            })

            reviewsCounts.forEach(count => {
                expect(count).toBeDefined();
                expect(count).toHaveTextContent("Reviews");
                expect(count).toHaveTextContent("3");
            })

            ratingCounts.forEach((count, idx)=> {
                expect(count).toBeDefined();
                expect(count).toHaveTextContent("Rating");
                expect(count).toHaveTextContent( idx === 0 ? "88" : "72" );
            })

            expect(firstLanguageItem).toHaveTextContent('TypeScript');
            expect(secondLanguageItem).toHaveTextContent('JavaScript');
		});
	});
});
