import { ethers } from "ethers";
import { getContract } from "./web3";

// 프로젝트 생성
export const createProject = async (goalAmount, durationInDays) => {
  try {
    const contract = await getContract();
    const goalInWei = ethers.parseEther(goalAmount.toString());
    const durationInSeconds = durationInDays * 24 * 60 * 60;

    const tx = await contract.createProject(goalInWei, durationInSeconds);
    await tx.wait();

    return tx;
  } catch (error) {
    console.error("프로젝트 생성 실패:", error);
    throw error;
  }
};

// 프로젝트에 투자
export const investInProject = async (projectId, amount) => {
  try {
    const contract = await getContract();
    const amountInWei = ethers.parseEther(amount.toString());

    const tx = await contract.invest(projectId, { value: amountInWei });
    await tx.wait();

    return tx;
  } catch (error) {
    console.error("투자 실패:", error);
    throw error;
  }
};

// 프로젝트 정보 조회
export const getProjectInfo = async (projectId) => {
  try {
    const contract = await getContract();
    const project = await contract.projects(projectId);

    return {
      owner: project.owner,
      goalAmount: ethers.formatEther(project.goalAmount),
      currentRaisedAmount: ethers.formatEther(project.currentRaisedAmount),
      deadline: new Date(Number(project.deadline) * 1000),
      currentState: project.currentState,
      investorCount: Number(project.investorCount),
      progress:
        (Number(project.currentRaisedAmount) / Number(project.goalAmount)) *
        100,
    };
  } catch (error) {
    console.error("프로젝트 정보 조회 실패:", error);
    throw error;
  }
};

// 모든 프로젝트 정보 조회(컨트랙트에 카운터가 있다고 가정)
export const getAllProjects = async () => {
  try {
    // const contract = await getContract();
    const projects = [];

    let projectId = 0;

    while (true) {
      try {
        const project = await getProjectInfo(projectId);
        projects.push({ id: projectId, ...project });
        projectId++;
      } catch (error) {
        console.log("오류: ", error);
        break;
      }
    }

    return projects;
  } catch (error) {
    console.error("전체 프로젝트 조회 실패:", error);
    throw error;
  }
};
